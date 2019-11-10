declare module 'postcss-easy-import' {
   import { Plugin } from 'postcss';

   // tslint:disable-next-line interface-name
   interface Options {
      prefix: string | boolean;
      extensions: string | string[];
   }

   type PostcssEasyImport = Plugin<Options>;

   function plugin(options: Options): PostcssEasyImport;

   export = plugin;
}
