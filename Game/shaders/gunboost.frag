uniform sampler2D texture;
uniform float time;

void main()
{
    vec4 pixel = texture2D(texture, gl_TexCoord[0].xy);
    
    // Orange tint
    vec3 orange = vec3(1.0, 0.5, 0.1);
    pixel.rgb = mix(pixel.rgb, orange, 0.7);
    
    // Glow effect
    float glow = 0.4 + 0.6 * sin(time * 4.0);
    pixel.rgb += vec3(0.5, 0.2, 0.0) * glow;
    
    // Add brightness
    pixel.rgb *= 1.3;
    
    gl_FragColor = pixel * gl_Color;
}
