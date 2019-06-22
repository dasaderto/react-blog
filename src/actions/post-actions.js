export const APPEND_POST = 'posts:appendPost';

export function appendPost(newPost) {
    return {
        type: APPEND_POST,
        payload: {
            post:newPost
        }
    }
}