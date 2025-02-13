import psutil
import platform
import os

def get_system_status():
    # Memory Details
    memory = psutil.virtual_memory()

    # CPU Details
    cpu = {
        "cpu_count": psutil.cpu_count(logical=True),
        "cpu_usage": psutil.cpu_percent(interval=1),
        "cpu_frequency": psutil.cpu_freq().current if psutil.cpu_freq() else None
    }

    # Disk Usage
    disk = psutil.disk_usage('/')

    # Network Usage
    net = psutil.net_io_counters()

    # System Info
    system_info = {
        "os": platform.system(),
        "os_version": platform.version(),
        "architecture": platform.architecture()[0],
        "hostname": platform.node(),
        "uptime": psutil.boot_time()
    }

    # Process Info
    processes = [
        {
            "pid": proc.pid,
            "name": proc.name(),
            "status": proc.status(),
            "memory_percent": proc.memory_percent(),
            "cpu_percent": proc.cpu_percent(interval=0.1),
        }
        for proc in psutil.process_iter(attrs=['pid', 'name', 'status'])
    ]

    return {
        "memory": {
            "total": memory.total // (1024 ** 2),
            "available": memory.available // (1024 ** 2),
            "used": memory.used // (1024 ** 2),
            "percentage": memory.percent
        },
        "cpu": cpu,
        "disk": {
            "total": disk.total // (1024 ** 3),
            "used": disk.used // (1024 ** 3),
            "free": disk.free // (1024 ** 3),
            "percentage": disk.percent
        },
        "network": {
            "bytes_sent": net.bytes_sent // (1024 ** 2),
            "bytes_received": net.bytes_recv // (1024 ** 2)
        },
        "system_info": system_info,
        "top_processes": sorted(processes, key=lambda x: x["cpu_percent"], reverse=True)[:5]
    }
