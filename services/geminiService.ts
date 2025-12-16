import { GoogleGenAI, Type } from "@google/genai";
import { DailyItinerary, ItineraryItem } from "../types";

// Explicitly declare process to satisfy TypeScript when accessing process.env.API_KEY
declare const process: any;

// Safety check for API key (though we assume it's there per instructions)
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateScenicImage = async (query: string): Promise<string | null> => {
  if (!apiKey) return null;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `Cinematic travel photography of ${query}, Shikoku Japan. Photorealistic, beautiful lighting, 4k, high resolution, minimalist composition.` }],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image generation failed:", error);
    return null;
  }
};

export const enrichItineraryWithAI = async (itinerary: DailyItinerary[]): Promise<DailyItinerary[]> => {
  if (!apiKey) {
    console.warn("No API Key provided. Returning original itinerary.");
    return itinerary;
  }

  const prompt = `
    你是一位專業的日本四國旅遊導遊，請使用繁體中文（台灣用語）。
    我有一份 12 月底前往高松和德島的 7 天行程。
    
    請針對每一天和特定景點提供以下資訊（請全部使用繁體中文回答）：
    1. aiDescription: 關於該地點的歷史或重要性的極短「AI 觀點」（最多 20 字）。
    2. mustEat: 該地點或店家的「必吃」推薦（例如：如果是烏龍麵店，推薦必點菜色）。
    3. mustBuy: 如果是購物點，推薦「必買」的伴手禮。
    4. tips: 一個實用的貼心叮嚀（例如：「風大請帶圍巾」、「可能需要排隊」）。
    5. weather: 該地點 12 月底的典型天氣（簡短格式，例如「8°C 多雲」、「5°C 晴天」）。

    請回傳符合輸入結構的 JSON 資料。
  `;

  try {
    // We will process a simplified version to save tokens, then merge back
    const simplifiedInput = itinerary.map(day => ({
      date: day.date,
      items: day.items.map(item => ({
        id: item.id,
        title: item.title,
        location: item.location,
        type: item.type
      }))
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: JSON.stringify(simplifiedInput) + prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              date: { type: Type.STRING },
              weather: { type: Type.STRING },
              temperature: { type: Type.STRING },
              items: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    aiDescription: { type: Type.STRING },
                    mustEat: { type: Type.ARRAY, items: { type: Type.STRING } },
                    mustBuy: { type: Type.ARRAY, items: { type: Type.STRING } },
                    tips: { type: Type.ARRAY, items: { type: Type.STRING } },
                  }
                }
              }
            }
          }
        }
      }
    });

    const enrichedData = JSON.parse(response.text || '[]');

    // Merge enriched data back into original structure
    const mergedItinerary = itinerary.map(day => {
      const enrichedDay = enrichedData.find((d: any) => d.date === day.date);
      if (!enrichedDay) return day;

      const mergedItems = day.items.map(item => {
        const enrichedItem = enrichedDay.items?.find((i: any) => i.id === item.id);
        if (!enrichedItem) return item;

        return {
          ...item,
          aiDescription: enrichedItem.aiDescription,
          mustEat: enrichedItem.mustEat,
          mustBuy: enrichedItem.mustBuy,
          tips: enrichedItem.tips
        };
      });

      return {
        ...day,
        weather: enrichedDay.weather,
        temperature: enrichedDay.temperature,
        items: mergedItems
      };
    });

    return mergedItinerary;

  } catch (error) {
    console.error("Gemini enrichment failed:", error);
    return itinerary; // Fallback to original
  }
};