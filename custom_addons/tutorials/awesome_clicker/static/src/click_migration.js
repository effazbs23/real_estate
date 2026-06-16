export const CURRENT_VERSION = 1.0;
export const migrations = [];

export function migrate(localState) {
    if (!localState) {
        return localState;
    }
    const version = localState.version !== undefined ? localState.version : 0;
    if (version < CURRENT_VERSION) {
        localState.version = version;
        let migrated = true;
        while (migrated && localState.version < CURRENT_VERSION) {
            migrated = false;
            for (const migration of migrations) {
                if (localState.version === migration.fromVersion) {
                    migration.apply(localState);
                    localState.version = migration.toVersion;
                    migrated = true;
                    break;
                }
            }
        }
        localState.version = CURRENT_VERSION;
    }
    return localState;
}