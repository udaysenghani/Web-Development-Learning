/******************************************************************
 ERROR HANDLING
******************************************************************/

/*
Centralized error handling
Avoids try/catch everywhere
*/

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Throwing error
app.get('/fail', (req, res, next) => {
  next(new AppError('Something broke', 400));
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: 'error',
    message: err.message
  });
});
