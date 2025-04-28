interface VersionInfo {
    version: string;
    commitHash: string;
    buildDate: string;
}

export const versionInfo: VersionInfo = {
    version: process.env.NEXT_PUBLIC_APP_VERSION || '0.0.0',
    commitHash: process.env.NEXT_PUBLIC_COMMIT_HASH || 'development',
    buildDate: process.env.NEXT_PUBLIC_BUILD_DATE || new Date().toISOString(),
}; 