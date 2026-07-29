import { getSubTopicsByTopic } from "./task.service";

export interface SubTopic {
  id: string;
  name: string;
  topic_id: string;
  disabled?: boolean;
}

// In-memory cache
const subTopicCache = new Map<string, SubTopic[]>();

export const getSubTopicsForTopics = async (
  topicIds: string[]
): Promise<SubTopic[]> => {
  if (!topicIds.length) {
    return [];
  }

  // Determine which topicIds need to be fetched
  const idsToFetch = topicIds.filter((id) => !subTopicCache.has(id));

  if (idsToFetch.length) {
    const responses = await Promise.all(
      idsToFetch.map((topicId) => getSubTopicsByTopic(topicId))
    );

    responses.forEach((response: any, index) => {
      subTopicCache.set(idsToFetch[index], response.data ?? []);
    });
  }

  // Merge all cached results
  const merged = topicIds.flatMap(
    (id) => subTopicCache.get(id) ?? []
  );

  // Remove duplicates
  const uniqueMap = new Map<string, SubTopic>();

  merged.forEach((item) => {
    uniqueMap.set(item.id, item);
  });

  return [...uniqueMap.values()];
};

export const clearSubTopicCache = () => {
  subTopicCache.clear();
};