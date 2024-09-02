import { Canvg } from 'canvg';

export const svgToCanvas = async (svgUrl, width, height) => {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;

    const context = canvas.getContext('2d');
    context.scale(devicePixelRatio, devicePixelRatio);

    const v = await Canvg.from(context, svgUrl);
    await v.render();
    return canvas.toDataURL('image/png');
  } catch (error) {
    console.error('Error converting SVG to canvas:', error);
    return null;
  }
};
