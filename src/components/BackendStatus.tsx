import { useBackendStatus } from '../hooks/useBackendStatus';

export function BackendStatus() {
  const status = useBackendStatus();

  return (
    <div className="fixed bottom-4 left-4 flex gap-2">
      {Object.entries(status).map(([service, isOnline]) => (
        <div
          key={service}
          className={`px-3 py-1 rounded-full text-sm ${
            isOnline ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {service.charAt(0).toUpperCase() + service.slice(1)}
        </div>
      ))}
    </div>
  );
}