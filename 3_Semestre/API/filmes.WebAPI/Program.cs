using filmes.WebAPI.Repositories;
using Filmes.WebAPI.Interfaces;
using FilmesTorloni.WebAPI.BdContextFilme;
using FilmesTorloni.WebAPI.Interfaces;
using FilmesTorloni.WebAPI.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.IdentityModel.Tokens.Experimental;
using Microsoft.OpenApi;
using System.ComponentModel;

var builder = WebApplication.CreateBuilder(args);

// Adiciona o contexto do banco de dados (exemplo com SQL Server)
builder.Services.AddDbContext<FilmeContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Adiona o repositório ao container de injeção de dependência 
builder.Services.AddScoped<IGeneroRepository, GeneroRepository>();
builder.Services.AddScoped<IFilmeRepository, FilmeRepository>();
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();

//Adiciona o serviço de autenticação JWT Bearer (forma de autenticação)
object valeu = builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = "JwtBearer";
    options.DefaultChallengeScheme = "JwtBearer";
})
    .AddJwtBearer("JwtBearer", options =>


    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            //valida quem está solicitando
            ValidateIssuer = true,

            //valida quem está recebendo
            ValidateAudience = true,

            //define se o tempo de expiração será validado
            ValidateLifetime = true,

            //forma de criptografia e valida a chave de autenticação
            IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("filmes-chave-autenticacao-webapi-dev")),

            //valida o tempo de expiração do token
            ClockSkew = TimeSpan.FromMinutes(5),

            //nome do issuer (de onde está vindo)
            ValidIssuer = "api_filmes",

            //nome do audience (para onde ele está indo)
            ValidAudience = "api_filmes"
        };
    });

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "API de Filmes",
        Description = "API para gerenciamento de filmes e gêneros",
        TermsOfService = new Uri("https://opensource.org/licenses/MIT"),
        Contact = new OpenApiContact
        {
            Name = "Paulo",
            Url = new Uri("https://github.com/PauloRodrigues2008")

        },
        License = new OpenApiLicense
        {
            Name = "Example",
            Url = new Uri("https://github.com/PauloRodrigues2008")
        }
    });

    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = " Insira o token JWT:"

    });

    options.AddSecurityRequirement(document => new OpenApiSecurityRequirement
    {
        [new OpenApiSecuritySchemeReference("Bearer",document)] = Array.Empty<string>().ToList()

        });

    });


builder.Services.AddCors(options =>
{

  options.AddPolicy("CorsOlicy", builder =>
    {
        builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();

    });
});

// Adiciona o serviço de Controllers
builder.Services.AddControllers();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger(options => { });
    app.UseSwaggerUI(options =>

    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json","v1");
        options.RoutePrefix = string.Empty;
    });

}

app.UseStaticFiles();

app.UseAuthentication();

app.UseAuthorization();

// Adiciona o mapeamento de Controllers
app.MapControllers();

app.Run();
