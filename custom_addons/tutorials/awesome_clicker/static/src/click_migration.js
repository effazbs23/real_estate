export const CURRENT_VERSION = 2.0;
export const migrations = [{
    fromVersion : 1.0,
    toVersion : 2.0,
    apply: (state) => {
        state.trees.peach = {
            price : 1500000,
            level: 4,
            number: 0
        }
    }
}];

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