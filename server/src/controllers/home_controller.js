const { redisGet, redisSet } = require('../libs/redisClient');
class Home {
  async getSession(ctx, next) {
    const { session } = ctx;
    session.uid = session.uid || 0;
    if (!session.uid) {
      session.uid = session.uid++;
      session.username = 'sin';
      session.nickname = 'feynman_sin';
      session.gender = 'male';
    }
    console.log(">>>>session", session)
    // const res = await redisGet('asurada.sessiZG2RMmkY3qhYeaVNCe7sIrAFq-2D3I0');
    // console.log(">>>>>res", res)
    // await ctx.render('index');
    ctx.body = session
  }
}

module.exports = new Home();