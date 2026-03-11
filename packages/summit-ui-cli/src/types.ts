export interface RegistryFile {
  path: string;
  type: 'component' | 'style' | 'file';
  content: string;
}

export interface RegistryItem {
  name: string;
  title: string;
  description: string;
  dependencies: string[];
  devDependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
}

export interface SummitConfig {
  registry: string;
  outputDir: string;
}
