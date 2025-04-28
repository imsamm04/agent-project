// // API endpoints
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

// // Health records API
// export const fetchHealthRecords = async (userId) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/health-records/${userId}`);
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching health records:', error);
//     throw error;
//   }
// };

// // Notifications API
// export const fetchNotifications = async (userId) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/notifications/${userId}`);
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching notifications:', error);
//     throw error;
//   }
// };

// // Challenge API
// export const fetchChallenges = async () => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/challenges`);
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching challenges:', error);
//     throw error;
//   }
// };

// // Column API
// export const fetchColumns = async (page = 1, limit = 8) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/columns?page=${page}&limit=${limit}`);
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching columns:', error);
//     throw error;
//   }
// }; 