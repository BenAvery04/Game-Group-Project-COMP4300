uniform sampler2D texture;
uniform float time;

void main()
{
    vec4 pixel = texture2D(texture, gl_TexCoord[0].xy);
    
    // Blue tint
    vec3 blue = vec3(0.2, 0.4, 1.0);
    pixel.rgb = mix(pixel.rgb, blue, 0.7);
    
    // Pulsing effect 
    float pulse = 0.3 + 0.7 * sin(time * 5.0);
    pixel.rgb += vec3(0.0, 0.2, 0.5) * pulse;
    
    // Add brightness
    pixel.rgb *= 1.3;
    
    gl_FragColor = pixel * gl_Color;
}
