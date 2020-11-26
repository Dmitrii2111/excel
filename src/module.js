console.log('module.js');

async function jopa() {
  return await Promise.resolve('async working !')
}

jopa().then(console.log)
