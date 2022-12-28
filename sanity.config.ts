import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './app/components/StudioNavbar';
import Logo from './app/components/Logo';
import { getDefaultDocumentNode } from './deskStructure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET!;
export default defineConfig({
  basePath:'/studio',
  name: 'Doufy_Studio',
  title: 'DOUFY_CONTENT_STUDIO',
  projectId,
  dataset,

  plugins: [deskTool(
    {defaultDocumentNode:getDefaultDocumentNode}
  ), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      logo:Logo,
      navbar : StudioNavbar
    }
    
  },
  theme : myTheme
})
