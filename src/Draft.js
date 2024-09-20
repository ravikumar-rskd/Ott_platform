<Router>
         <Routes>
           <Route path="/" element={<MovieList />} />
           <Route path="/movie/:id" element={<MovieDetails />} />
         </Routes>
       </Router>