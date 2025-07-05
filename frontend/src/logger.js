const logger = (message, level = 'info') => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  localStorage.setItem('lastLog', logEntry);
};
export default logger;
