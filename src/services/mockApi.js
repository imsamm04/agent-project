// Mock API cho các list, trả về Promise

export const fetchRecords = () =>
  Promise.resolve([
    { id: 1, date: '2021-05-21', type: 'Morning', image: '/assets/morning1.jpg' },
    { id: 2, date: '2021-05-21', type: 'Lunch', image: '/assets/lunch1.jpg' },
    // ... thêm dữ liệu mẫu
  ]);

export const fetchExercises = () =>
  Promise.resolve([
    { id: 1, name: '家事全般（立位・軽い）', time: 10, kcal: 26 },
    // ... thêm dữ liệu mẫu
  ]);

export const fetchDiaries = () =>
  Promise.resolve([
    { id: 1, date: '2021-05-21 23:25', content: '私の日記の内容が一部表示されます。テキストテキストテキスト...' },
    // ... thêm dữ liệu mẫu
  ]);

export const fetchColumns = () =>
  Promise.resolve([
    { id: 1, date: '2021-05-17 23:25', title: '魚を食べて頭もカラダも元気に！', image: '/assets/column1.jpg', tags: ['#魚料理', '#和食', '#DHA'] },
    // ... thêm dữ liệu mẫu
  ]); 