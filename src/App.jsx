import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="inbox">
        <div className="inbox-header">
          <div className="notifications">
            <h1>Notifications</h1>
            <span>3</span>
          </div>
          <button>Mark all as read</button>
        </div>

        <Comment
          image="assets/images/avatar-mark-webber.webp"
          details="<b>Mark Webber</b> reacted to your recent post
        <b>My first tournament today!</b>"
          timeSent="1m"
          commented_pic=""
          message=""
        />

        <Comment
          image="assets/images/avatar-angela-gray.webp"
          details="<b>Angela Gray</b> followed you"
          timeSent="5m"
          commented_pic=""
          message=""
        />

        <Comment
          image="assets/images/avatar-jacob-thompson.webp"
          details="<b>Jacob Thomspon</b> has joined your group <b>Chess Club</b>"
          timeSent="1 day"
          commented_pic=""
          message=""
        />

        <Comment
          image="assets/images/avatar-rizky-hasanuddin.webp"
          details="<b>Rizky Hasanuddin</b> sent you a private message"
          timeSent="5 days"
          commented_pic=""
          message=""
        />
      </div>
    </div>
  );
}

export default App;
