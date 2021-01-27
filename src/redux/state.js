let store = {
  _state: {
    profilePage: {
      posts: [
        { key: 1, text: "Hey, why nobody love me?", likes: 11 },
        { key: 2, text: "It's our new program! Hey!", likes: 24 },
        { key: 3, text: "Bla bla bla", likes: 3 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      friends: [
        {
          name: "Dimych",
          avatar:
            "https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png",
          userID: 1,
          key: 1,
        },
        {
          name: "Andrew",
          avatar:
            "https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png",
          userID: 2,
          key: 2,
        },
        {
          name: "Sveta",
          avatar:
            "https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png",
          userID: 3,
          key: 3,
        },
        {
          name: "Sasha",
          avatar:
            "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-3.jpg",
          userID: 4,
          key: 4,
        },
        {
          name: "Viktor",
          avatar:
            "https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/dalai-lama-icon.png",
          userID: 5,
          key: 5,
        },
        {
          name: "Valera",
          avatar:
            "https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/donald-trump-icon.png",
          userID: 6,
          key: 6,
        },
      ],
      messages: [
        { key: 1, id: 1, text: "Hi" },
        { key: 2, id: 2, text: "How are you?" },
        { key: 3, id: 3, text: "Not Bad" },
        { key: 4, id: 4, text: "Whats up!!!" },
        { key: 5, id: 5, text: "Whazzup!!" },
      ],
    },
  },
  _callSubscribe() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // {type: 'ADD-POST'}

    if (action.type === "ADD-POST") {
      let newPost = {
        key: 5,
        text: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      debugger;
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  };
};

export const updatePostTextActionCreator = (text) => {
  return { type: "UPDATE-NEW-POST-TEXT", newText: text };
};


export default store;
window.store = store;
