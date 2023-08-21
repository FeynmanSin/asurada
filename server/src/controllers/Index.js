const { redisGet, redisSet } = require('../libs/redisClient');
class Index {
  async index(ctx, next) {
    const { session } = ctx;
    if (!session.uid) {
      session.uid = 1;
      session.username = 'sin';
      session.nickname = 'feynman_sin';
      session.gender = 'male';
    }
    redisSet('a', 1)
    const res = await redisGet('asurada.sessiZG2RMmkY3qhYeaVNCe7sIrAFq-2D3I0');

    ctx.body = {
      session: session
    }
    // await ctx.render('index');
  }
}

module.exports = new Index();