@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Para abrir Orbita necesitas Node.js 20 o posterior.
  echo Descargalo desde https://nodejs.org/
  pause
  exit /b 1
)
powershell -NoProfile -Command "$taskFolder=(Get-Location).Path; Start-Process -FilePath (Get-Command node).Source -ArgumentList 'scripts/serve.mjs' -WorkingDirectory $taskFolder -WindowStyle Hidden; Start-Sleep -Seconds 1; Start-Process 'http://127.0.0.1:4186/solar-nave/'"
