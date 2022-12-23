import { Router } from 'express';
import { PostController } from './postController';
import { adminRequired } from '../middleware/adminRequired';
import { loginRequired } from '../middleware/loginRequired';

const postController = new PostController();
const postRouter = Router();

postRouter.post('/create', loginRequired, adminRequired, postController.createPost);
postRouter.patch('/:id', loginRequired, adminRequired, postController.updatePost);
postRouter.delete('/:id', loginRequired, adminRequired, postController.deletePost);
postRouter.get('/:id', postController.findOnePost);
postRouter.get('/', postController.findAllPost);

export { postRouter };
