#!/bin/bash

# ============================================
#  Deploy Script — Portfólio Lucas Nazário
#  VPS: nazario.forjacorp.com
# ============================================

set -e

PORT=80
CONTAINER_NAME="portfolio"
IMAGE_NAME="nazario-portfolio:latest"
REPO_URL="https://github.com/lucasnaza1/MeuPortfolio.git"
PROJECT_DIR="MeuPortfolio"

echo "🚀 Iniciando deploy do Portfólio..."
echo "============================================"

# Verifica se o Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "❌ Docker não encontrado. Instale com:"
    echo "   curl -fsSL https://get.docker.com | sh"
    exit 1
fi

# Clona ou atualiza o repositório
if [ -d "$PROJECT_DIR" ]; then
    echo "📦 Atualizando repositório existente..."
    cd "$PROJECT_DIR"
    git pull origin main
else
    echo "📦 Clonando repositório..."
    git clone "$REPO_URL"
    cd "$PROJECT_DIR"
fi

# Build da imagem
echo "🔨 Construindo imagem Docker..."
docker build -t "$IMAGE_NAME" .

# Para e remove container antigo
echo "🧹 Limpando container antigo..."
docker stop "$CONTAINER_NAME" 2>/dev/null || true
docker rm "$CONTAINER_NAME" 2>/dev/null || true

# Roda o novo container
echo "▶️  Iniciando novo container..."
docker run -d \
    -p "$PORT":80 \
    --restart unless-stopped \
    --name "$CONTAINER_NAME" \
    "$IMAGE_NAME"

# Verifica se está rodando
echo "✅ Verificando status..."
if docker ps | grep -q "$CONTAINER_NAME"; then
    echo ""
    echo "============================================"
    echo "🎉 Deploy concluído com sucesso!"
    echo "🌐 Acesse: http://nazario.forjacorp.com"
    echo "============================================"
else
    echo "❌ Erro: container não está rodando!"
    docker logs "$CONTAINER_NAME"
    exit 1
fi
