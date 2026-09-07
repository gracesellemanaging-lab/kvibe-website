@echo off
echo Starting K-VIBES website...
cd /d "%~dp0"
echo [1/2] Building (if needed)...
call npm run build
echo [2/2] Starting preview on http://localhost:4173 and dev on http://localhost:5173
echo Keep this window open. Press Ctrl+C to stop.
echo.
echo Opening browser...
start http://localhost:4173
call npx vite preview --port 4173 --host 0.0.0.0
pause
