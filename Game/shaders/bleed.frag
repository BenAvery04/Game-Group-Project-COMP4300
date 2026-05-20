uniform sampler2D texture;
uniform float time;

void main()
{
    vec4 pixel = texture2D(texture, gl_TexCoord[0].xy);
    
    // Red tint 
    vec3 red = vec3(1.0, 0.1, 0.1);
    pixel.rgb = mix(pixel.rgb, red, 0.8);
    
    //Pulse effect
    float pulse = 0.5 + 0.5 * sin(time * 6.0);
    pixel.rgb *= pulse;
    
    // Add brightness
    pixel.rgb *= 1.2;
    
    gl_FragColor = pixel * gl_Color;
}
