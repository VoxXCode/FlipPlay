<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMediaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $mediaId = $this->route('media') instanceof \App\Models\Media
            ? $this->route('media')->id
            : $this->route('media');

        $isPatch = $this->isMethod('PATCH') || $this->isMethod('PUT');

        return [
            'title' => $isPatch
                ? 'sometimes|string|max:255|unique:media,title,' . $mediaId
                : 'required|string|max:255|unique:media,title',
            'type' => $isPatch ? 'sometimes|string|max:100' : 'required|string|max:100',
            'score' => $isPatch ? 'sometimes|numeric|min:0|max:10' : 'required|numeric|min:0|max:10',
            'year' => $isPatch ? 'sometimes|integer|min:1900|max:2100' : 'required|integer|min:1900|max:2100',
            'synopsis' => 'nullable|string',
            'image' => 'nullable|string',
            'genre' => 'nullable|string',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Judul media wajib diisi',
            'title.unique' => 'Judul media sudah terdaftar',
            'type.required' => 'Tipe media wajib diisi',
            'score.required' => 'Skor wajib diisi',
            'score.min' => 'Skor tidak boleh kurang dari 0',
            'score.max' => 'Skor tidak boleh lebih dari 10',
            'year.required' => 'Tahun rilis wajib diisi',
        ];
    }
}
