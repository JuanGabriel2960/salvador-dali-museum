import { Suspense } from 'react';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ScreenLoader } from '../shared/components/ScreenLoader';
import { routes } from './routes';

export const Router = () => {
    return (
        <Suspense fallback={<ScreenLoader />}>
            <BrowserRouter>
                    <Routes>
                        {
                            routes.map(({ path, component: Component }) => (
                                <Route key={path} path={path} element={<Component />} />
                            ))
                        }

                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
            </BrowserRouter>
        </Suspense>
    )
};
