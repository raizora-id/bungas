import { versionInfo } from '../version';

export const VersionInfo = () => {
  return (
    <div className="text-xs text-gray-500">
      <p>Version: {versionInfo.version}</p>
      <p>Commit: {versionInfo.commitHash}</p>
      <p>Built: {new Date(versionInfo.buildDate).toLocaleString()}</p>
    </div>
  );
}; 