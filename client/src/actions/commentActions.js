export function commentActions(formContent) {
 
  return (dispatch) => {
    return fetch(`http://localhost:3001/posts/${formContent.postId}/comments`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({comment: formContent})})
      .then(response => response.json())
      .then(post => {dispatch({ type: 'UPDATE_POST', post })});
  }
}