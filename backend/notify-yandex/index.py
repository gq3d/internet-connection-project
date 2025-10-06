import json
import os
import urllib.request
import urllib.parse
import urllib.error
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Отправляет уведомление в Яндекс.Вебмастер о обновлении sitemap
    Args: event с httpMethod GET/POST
    Returns: HTTP response с результатом отправки
    '''
    
    method: str = event.get('httpMethod', 'GET')
    
    # CORS для OPTIONS
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    # Получаем переменные окружения
    user_id = os.environ.get('YANDEX_WEBMASTER_USER_ID', '')
    api_key = os.environ.get('YANDEX_WEBMASTER_API_KEY', '')
    
    if not user_id or not api_key:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': False,
                'error': 'Не настроены ключи API для Яндекс.Вебмастер. Добавьте YANDEX_WEBMASTER_USER_ID и YANDEX_WEBMASTER_API_KEY в секреты проекта.'
            })
        }
    
    # URL sitemap
    sitemap_url = 'https://mosoblconnect.ru/sitemap.xml'
    host_id = 'https:mosoblconnect.ru'  # Формат для API Яндекса
    
    # Формируем URL для API Яндекс.Вебмастер
    api_url = f'https://api.webmaster.yandex.net/v4/user/{user_id}/hosts/{urllib.parse.quote(host_id, safe="")}/recrawl/sitemap'
    
    # Подготавливаем данные запроса
    request_data = json.dumps({
        'sitemap_url': sitemap_url
    }).encode('utf-8')
    
    # Создаём запрос
    req = urllib.request.Request(
        api_url,
        data=request_data,
        headers={
            'Authorization': f'OAuth {api_key}',
            'Content-Type': 'application/json'
        },
        method='POST'
    )
    
    try:
        # Отправляем запрос
        with urllib.request.urlopen(req, timeout=10) as response:
            response_data = response.read().decode('utf-8')
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({
                    'success': True,
                    'message': 'Sitemap успешно отправлен в Яндекс.Вебмастер!',
                    'sitemap_url': sitemap_url,
                    'response': response_data
                })
            }
            
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8') if e.fp else str(e)
        
        return {
            'statusCode': e.code,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': False,
                'error': f'Ошибка API Яндекс.Вебмастер: {error_body}',
                'status_code': e.code
            })
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': False,
                'error': str(e)
            })
        }
