import { createContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Paintings } from './pages/Paintings/index';
import { Navbar } from '../shared/components/Navbar/index';
import { StyleSheet } from '../shared/interfaces';
import { usePaintings } from './hooks/usePaintings';
import { usePaintings as State, PaintingsResp } from './interfaces/index';

interface paintingsContext {
    state: State;
    openPaintingDetails: (paintingSelected: PaintingsResp) => void;
    closePaintingDetails: () => void;
}

export const paintingsContext = createContext({} as paintingsContext);
const { Provider } = paintingsContext;

export const PaintingsModule = () => {

    const { state, openPaintingDetails, closePaintingDetails } = usePaintings()

    return (
        <Provider value={{ state, openPaintingDetails, closePaintingDetails }}>
            <div style={styles.container}>
                <Navbar />

                <Routes>
                    <Route path="" element={<Paintings />} />

                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>

                <p></p>
            </div>
        </Provider>
    )
};

export default PaintingsModule;

const styles: StyleSheet = {
    container: {
        padding: '2rem',
        backgroundColor: 'var(--beige)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}
