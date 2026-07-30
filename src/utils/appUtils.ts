export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const formatDateTime = (date: any) =>
  new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(date));
