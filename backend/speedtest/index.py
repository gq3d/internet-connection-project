"""
Business: Provides test file for internet speed measurement
Args: event with httpMethod and queryStringParameters (size parameter)
Returns: Binary data or JSON response
"""

import json
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method == 'GET':
        params = event.get('queryStringParameters', {})
        size_mb = int(params.get('size', '10'))
        size_bytes = size_mb * 1024 * 1024
        
        data = b'0' * size_bytes
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/octet-stream',
                'Content-Length': str(size_bytes),
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-cache, no-store, must-revalidate'
            },
            'isBase64Encoded': False,
            'body': data.decode('latin-1')
        }
    
    if method == 'POST':
        body = event.get('body', '')
        received_size = len(body)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'received': received_size,
                'success': True
            })
        }
    
    return {
        'statusCode': 405,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'})
    }
