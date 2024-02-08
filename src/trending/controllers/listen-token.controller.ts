import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateListenTokenDto } from '../dtos/create-listen-token.dto';
import { ShyftApi } from '@/common/apis/shyft.api';
import ApiError from '@/api-error/entities/api-error.entity';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';

@Controller('listen-token')
export class ListenTokenController {
  @Post('/')
  @UseGuards(JwtAuthGuard)
  async create(@Body() body: CreateListenTokenDto) {
    const res = await ShyftApi.post('/callback/create', {
      addresses: [body.address],
      network: body.network,
      callback_url: process.env.CALLBACK_URL,
      events: ['SWAP']
    })
    return { ok: true, response: res.data }
  }

  @Get('/')
  async listAllListeningTokens() {
    const res = await ShyftApi.get('/callback/list')
    return { ok: true, response: res.data.result }
  }

  @Delete('/:id')
  async deleteListeningToken(@Param('id') id: string) {
    const res = await ShyftApi.delete(`/callback/remove`, { data: { id } })
    if (!res.data) throw new ApiError('listen-token-deletion-error', 'Error deleting listen token', 500)
    return { ok: true }
  }

}
