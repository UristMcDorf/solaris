import { Router } from 'express';
import { DependencyContainer } from '../../types/DependencyContainer';
import Middleware from '../middleware';

export default (router: Router, io, container: DependencyContainer) => {

    const middleware = Middleware(container);

    router.put('/api/game/:gameId/research/now', middleware.authenticate, middleware.loadGame, middleware.validateGameLocked, middleware.validateGameNotFinished, middleware.loadPlayer, middleware.validateUndefeatedPlayer, async (req, res, next) => {
        try {
            let eta = await container.researchService.updateResearchNow(req.game, req.player, req.body.preference.toLowerCase().trim());
            
            return res.status(200).json(eta);
        } catch (err) {
            return next(err);
        }
    }, middleware.handleError);

    router.put('/api/game/:gameId/research/next', middleware.authenticate, middleware.loadGame, middleware.validateGameLocked, middleware.validateGameNotFinished, middleware.loadPlayer, middleware.validateUndefeatedPlayer, async (req, res, next) => {
        try {
            let eta = await container.researchService.updateResearchNext(req.game, req.player, req.body.preference.toLowerCase().trim());

            return res.status(200).json(eta);
        } catch (err) {
            return next(err);
        }
    }, middleware.handleError);

    return router;

};
