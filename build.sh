echo "Compiling static and transpiled assets"
npm run build:storybook
npm run build:package

echo "Bundling assests"
echo $2
cp package.json ./dist/build
cd dist/
tar -zcvf vivy-components-$2.tar.gz build/

