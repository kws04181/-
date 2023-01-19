import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "반복되고 강조되는 소리는",
  },
  {
    id: 2,
    message: "강아지를 불안하게 해요!!",
  },
  {
    id: 3,
    message: "강아지 훈련사 - 강형욱 왈",
  },
  {
    id: 4,
    message: "강아지 훈련사 - 강형욱 왈",
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [], // state에 notifications라는 이름으로 빈 배열
    };
  }

  // 컴포넌트가 생성될 때 호출
  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) { // 3개 보다 작을때
        const index = notifications.length;
        notifications.push(reservedNotifications[index]); // 새로운 배열에 푸쉬
        this.setState({ // state를 변경하여 재렌더링 됨
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications:[]
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;