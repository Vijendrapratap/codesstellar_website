import path from 'path';
import { fileURLToPath } from 'url';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';

import { Authors } from './collections/Authors';
import { BlogPosts } from './collections/BlogPosts';
import { Media } from './collections/Media';
import { ResearchItems } from './collections/ResearchItems';
import { Sources } from './collections/Sources';
import { TopicPillars } from './collections/TopicPillars';
import { Users } from './collections/Users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Authors, TopicPillars, Sources, ResearchItems, BlogPosts],
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/codesstellar_dev',
    },
  }),
  secret: process.env.PAYLOAD_SECRET || 'dev-only-change-me-codesstellar-payload-secret',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
