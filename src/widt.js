import { useEffect } from 'react';

export const ElevenLabsWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <elevenlabs-convai agent-id="VhO7GbHOKI9vVASHvr8Y"></elevenlabs-convai>
    </div>
  );
};
