import React from 'react';
import MainLayout from '../layouts/MainLayout';

const NotificationPage = () => {
  const notifications = [
    {
      id: 1,
      date: '2024.05.17',
      time: '23:25',
      type: 'achievement',
      message: '体重の目標を達成しました！おめでとうございます！',
      isRead: false
    },
    {
      id: 2,
      date: '2024.05.17',
      time: '20:15',
      type: 'recommendation',
      message: '今日のおすすめの運動：30分のヨガで心身をリフレッシュ',
      isRead: true
    },
    {
      id: 3,
      date: '2024.05.17',
      time: '18:45',
      type: 'warning',
      message: '今週の運動目標を達成まで、あと30分です！頑張りましょう！',
      isRead: true
    },
    {
      id: 4,
      date: '2024.05.17',
      time: '15:30',
      type: 'info',
      message: '新しい「朝活ヨガ」プログラムが追加されました',
      isRead: true
    },
    {
      id: 5,
      date: '2024.05.16',
      time: '22:10',
      type: 'achievement',
      message: '連続ログイン7日達成！素晴らしい継続力です',
      isRead: true
    },
    {
      id: 6,
      date: '2024.05.16',
      time: '19:20',
      type: 'recommendation',
      message: 'おすすめの食事レシピ：高タンパク質の健康サラダ',
      isRead: true
    },
    {
      id: 7,
      date: '2024.05.16',
      time: '14:15',
      type: 'info',
      message: '新しいチャレンジイベント「30日間筋トレ」が開始されました',
      isRead: true
    },
    {
      id: 8,
      date: '2024.05.15',
      time: '21:00',
      type: 'achievement',
      message: '今月の運動時間が20時間を超えました！',
      isRead: true
    },
    {
      id: 9,
      date: '2024.05.15',
      time: '17:30',
      type: 'warning',
      message: '水分摂取の記録を忘れずに入力してください',
      isRead: true
    },
    {
      id: 10,
      date: '2024.05.15',
      time: '12:45',
      type: 'recommendation',
      message: '午後のおすすめ：15分のストレッチで集中力アップ',
      isRead: true
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'achievement':
        return '/icons/icon_message.png';
      case 'recommendation':
        return '/icons/icon_message.png';
      case 'warning':
        return '/icons/icon_message.png';
      case 'info':
      default:
        return '/icons/icon_message.png';
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto max-w-[960px] pt-[100px] pb-[64px]">
        <h1 className="text-[22px] font-bold text-white mb-[16px]">お知らせ</h1>
        <div className="bg-[#2E2E2E] overflow-hidden">
          {notifications.map((notification) => (
            <div 
              key={notification.id}
              className={`flex items-start p-[16px] border-b border-[#777777] last:border-none ${
                notification.isRead ? 'opacity-70' : ''
              }`}
            >
              <img 
                src={getNotificationIcon(notification.type)}
                alt={notification.type}
                className="w-[24px] h-[24px] mt-[4px]"
              />
              <div className="ml-[12px] flex-1">
                <div className="flex items-center gap-[12px] mb-[8px]">
                  <span className="text-[#FF963C] text-[18px]">{notification.date}</span>
                  <span className="text-[#FF963C] text-[18px]">{notification.time}</span>
                  {!notification.isRead && (
                    <span className="bg-[#EA6C00] text-white text-[14px] px-[8px] py-[2px] rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-white text-[16px]">{notification.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default NotificationPage; 