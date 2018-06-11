echo "Compiling storybook static assets"
npm run build:storybook

echo "Compiling npm module"
npm run build:package
cp package.json dist/
tar -zcvf dist/dist.tar.gz dist/

