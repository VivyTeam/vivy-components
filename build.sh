echo "Compiling static and transpiled assets"
npm run build:storybook
npm run build:package

echo "Bundling assests"
cp package.json ./dist/build
cd dist/
tar -zcvf build.tar.gz build/

