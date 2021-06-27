/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const T = require('Textures');
const R = require('Reactive');
const Patches = require('Patches');
const EXPORT_RATIO = 'image_ratio';

(async function() {
  const galleryTex = await T.findFirst('galleryTexture0');
  const ratio = R.div(galleryTex.height, galleryTex.width);
  await Patches.inputs.setScalar(EXPORT_RATIO, ratio);
})();