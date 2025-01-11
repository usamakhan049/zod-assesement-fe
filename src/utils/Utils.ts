export const getLanguageColor = (language: string): string => {
    switch (language) {
        case "JavaScript":
            return "bg-[#f1e05a]";
        case "TypeScript":
            return "bg-[#2b7489]";
        case "Kotlin":
            return "bg-[#A97BFF]";
        case "C++":
            return "bg-[#a84c77]";
        default:
            return "bg-[#f34b7d]";
    }
};

export const getHostnameFromUrl = (url: string):string => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.hostname;
    } catch {
      return  ""; 
    }
  }