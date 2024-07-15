import React, { useState, useEffect, useReducer } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { SnackbarProvider } from "notistack";
import axios from "axios";

import "./styles/reset.css";
import theme from "./styles/theme";
import MyContext from "./Context";

import RootLayout from "./layouts/RootLayout";
import MainSection from "./componentes/MainSection";
import FormularioCategoria from "./componentes/FormularioCategoria";
import FormularioVideos from "./componentes/FormularioVideos";
import VideoPlayer from "./componentes/Carousel/Slider/VideoPlayer";
import Footer from "./componentes/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videoToPlay, setVideoToPlay] = useState();
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/categorias")
      .then((response) => setCategorias(response.data))
      .catch((error) => console.error(error));
  }, [reducerValue]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/videos")
      .then((response) => setVideos(response.data))
      .catch((error) => console.error(error));
  }, [reducerValue]);

  const handleVideoLoading = (videoUrl) => {
    setVideoToPlay(videoUrl);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={<MainSection categorias={categorias} videos={videos} />}
        />
        <Route path="/formulariovideos" element={<FormularioVideos />} />
        <Route path="/videoPlayer" element={<VideoPlayer />} />
        <Route path="/formulariocategoria" element={<FormularioCategoria />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
        <GlobalStyle />
        <main>
          <MyContext.Provider
            value={{
              handleVideoLoading,
              setVideoToPlay,
              videoToPlay,
              forceUpdate,
            }}
          >
            <RouterProvider router={router} />
            <Footer />
          </MyContext.Provider>
        </main>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
export default App;
