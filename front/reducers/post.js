export const initialState = {
  imagePaths: [], // 미리보기 이미지
  mainPosts: [{
    user: {
      id: 1,
      nickname: '이찬호'
    },
    createdAt: null,
    img: 'https://react-nodebird.s3.ap-northeast-2.amazonaws.com/thumb/1561169557454about-blank.jpg', // 이미지 주소
    content: '첫번째 게시글'
  }]
}

export const ADD_POST = 'ADD_POST';
export const ADD_DUMMY = 'ADD_DUMMY';

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:
      return {
        ...state
      }
    case ADD_DUMMY:
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts]
      }
    default:
      return {
        ...state
      };
  }
}

export default reducer;