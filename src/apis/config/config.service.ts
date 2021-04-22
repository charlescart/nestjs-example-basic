import * as fs from 'fs';
import { parse } from 'dotenv';
import { join } from 'path';

export class ConfigService {
    private readonly envConfig: { [key: string]: string }

    constructor() {
        const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

        if (isDevelopmentEnv) {
            const envFilePath = join(process.cwd(), '/.env');
            const existsPath = fs.existsSync(envFilePath)

            if (!existsPath) {
                console.error('.env file does not exist!');
                process.exit(0);
            }

            this.envConfig = parse(fs.readFileSync(envFilePath))
        } else {
            this.envConfig = {
                PORT: process.env.PORT,
                PREFIX: process.env.PREFIX,
            }
        }
    }

    get(key: string): string {
        return this.envConfig[key];
    }
}