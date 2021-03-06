import Cookies from 'cookies';
import { withSession } from '../../lib/withSession';

export default withSession(async (req: any, res: any) => {
  req.session.destroy();
  const cookies = new Cookies(req, res);
  cookies.set('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
    path: '/',
    domain:
      process.env.NODE_ENV === 'production' ? '.talaria-order.xyz' : undefined,
  });
  res.status(200).json({ status: 'success' });
});
